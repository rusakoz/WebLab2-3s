package com.lab2.web.servlet;

import com.lab2.web.model.CheckHit;
import com.lab2.web.model.TableSession;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.*;
//import jakarta.servlet.annotation.*;

@WebServlet(name = "AreaCheckServlet", value = "/checkArea")
public class AreaCheckServlet extends HttpServlet {

    private boolean validX(String x){
        return Float.parseFloat(x) >= -5 && Float.parseFloat(x) <= 5;
    }

    private boolean validY(String y){
        return Float.parseFloat(y) >= -3 && Float.parseFloat(y) <= 5;
    }

    private boolean validR(String r){
        float x = Float.parseFloat(r);
        return (x == 1 || x == 1.5 || x == 2 || x == 2.5 || x == 3);
    }

    public void init() {

    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        PrintWriter out = resp.getWriter();
        final long startTime = System.nanoTime();

        HttpSession session = req.getSession();

        String X = req.getParameter("X");
        String Y = req.getParameter("Y");
        String R = req.getParameter("R");
        if (!(validX(X) && validY(Y) && validR(R))){
            session.setAttribute("error_msg", "Ошибка в отправленных данных");
            resp.sendRedirect("index.jsp");
            return;
        }


        final boolean hit = CheckHit.checkHit(Float.parseFloat(X), Float.parseFloat(Y), Float.parseFloat(R));
        String resHit = hit? "Попал" : "Не попал";
        final String endTime = String.valueOf(System.nanoTime() - startTime) + "нс";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MMM.yyyy");
        final String date = LocalDateTime.now().format(formatter);

        List<TableSession> list = (List<TableSession>) session.getAttribute("dataTable");
        if (list == null){
            list = new ArrayList<>();
        }
        list.add(new TableSession(X, Y, R, resHit, endTime, date));
        session.setAttribute("dataTable", list);

        resp.setContentType("text/html;charset=UTF-8");
        out.println("<!DOCTYPE html>");
        out.println("<html lang=\"ru\">");
        out.println("<head>");
        out.println("    <meta charset=\"UTF-8\" />");
        out.println("    <title>Result</title>");
        out.println("    <link rel=\"stylesheet\" href=\"assets/main.css\">");
        out.println("</head>");
        out.println("<body>");

        out.println("        <table class=\"result-table\">");
        out.println("           <thead>");
        out.println("            <tr>");
        out.println("            <td>");
        out.println("                X");
        out.println("            </td>");
        out.println("            <td>");
        out.println("                Y");
        out.println("            </td>");
        out.println("            <td>");
        out.println("                R");
        out.println("            </td>");
        out.println("            <td>");
        out.println("                RESULT");
        out.println("            </td>");
        out.println("            <td>");
        out.println("                Current time");
        out.println("            </td>");
        out.println("            <td>");
        out.println("                Computation time");
        out.println("            </td>");
        out.println("            </tr>");

        out.println("            <tr>");
        out.println("            <td>");
        out.println("                "+ X);
        out.println("            </td>");
        out.println("            <td>");
        out.println("                " + Y);
        out.println("            </td>");
        out.println("            <td>");
        out.println("                " + R);
        out.println("            </td>");
        out.println("            <td>");
        out.println("                " + resHit);
        out.println("            </td>");
        out.println("            <td>");
        out.println("                " + date);
        out.println("            </td>");
        out.println("            <td>");
        out.println("                " + endTime);
        out.println("            </td>");
        out.println("            </tr>");
        out.println("        </table>");

        out.println("    <div class=\"blured-container round-container fit-content-container margin\">"); // Здесь подставьте результат вычислений
        out.println("        <p><a href=\"index.jsp\">Вернуться на главную страницу</a></p>");
        out.println("    </div>");
        out.println("           </thead>");
        out.println("</body>");
        out.println("</html>");

        out.close();

//            req.setAttribute("err_msg", "dsadas");
//            RequestDispatcher ds = req.getRequestDispatcher("index.jsp");
//            ds.forward(req, resp);


    }

    public void destroy() {
    }
}