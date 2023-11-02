package com.lab2.web.servlet;

import com.lab2.web.model.CheckHit;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.charset.StandardCharsets;

//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.*;
//import jakarta.servlet.annotation.*;

@WebServlet(name = "AreaCheckServlet", value = "/checkArea")
public class AreaCheckServlet extends HttpServlet {

    public void init() {

    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {

        System.out.println("accept");
        req.setCharacterEncoding(StandardCharsets.UTF_8.name());
        resp.setCharacterEncoding(StandardCharsets.UTF_8.name());

        System.out.println("accept2");
        String X = req.getParameter("X");
        String Y = req.getParameter("Y");
        String R = req.getParameter("R");
        PrintWriter out = resp.getWriter();
        if (CheckHit.checkHit(Float.parseFloat(X), Float.parseFloat(Y), Float.parseFloat(R))){
            // рисуем точку и меняем таблицу
            System.out.println("Попал");
            //out.write("попал");
            //resp.setStatus(400);
            //out.write("Bad Request");
            req.setAttribute("err_msg", "dsadas");
            RequestDispatcher ds = req.getRequestDispatcher("index.jsp");
            ds.forward(req, resp);
        }else{
            // меняем таблицу
            System.out.println("не попал");
            out.write("не попал");
            resp.setStatus(400);
            out.write("Bad Request");
        }

    }

    public void destroy() {
    }
}