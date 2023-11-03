package com.lab2.web.servlet;

import com.lab2.web.model.CheckHit;
import com.lab2.web.model.TableSession;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.*;
//import jakarta.servlet.annotation.*;

@WebServlet(name = "AreaCheckServlet", value = "/checkArea")
public class AreaCheckServlet extends HttpServlet {

    public void init() {

    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        req.setCharacterEncoding(StandardCharsets.UTF_8.name());
        resp.setCharacterEncoding(StandardCharsets.UTF_8.name());

        HttpSession session = req.getSession();
        final long startTime = System.nanoTime();
        System.out.println("accept");

        System.out.println("accept2");
        String X = req.getParameter("X");
        String Y = req.getParameter("Y");
        String R = req.getParameter("R");
        PrintWriter out = resp.getWriter();
        final boolean hit = CheckHit.checkHit(Float.parseFloat(X), Float.parseFloat(Y), Float.parseFloat(R));
        final long endTime = System.nanoTime() - startTime;
        final LocalDateTime date = LocalDateTime.now();
        String resHit = hit? "Попал" : "Не попал";

        List<TableSession> list = (List<TableSession>) session.getAttribute("dataTable");
        if (list == null){
            list = new ArrayList<>();
        }
        list.add(new TableSession(X, Y, R, resHit, endTime, date));
        session.setAttribute("dataTable", list);

        // рисуем точку и меняем таблицу
        System.out.println("Попал");
        //out.write("попал");
        //resp.setStatus(400);
        //out.write("Bad Request");
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
        out.println("        <p><a href=\"controller\">Вернуться на главную страницу</a></p>");
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