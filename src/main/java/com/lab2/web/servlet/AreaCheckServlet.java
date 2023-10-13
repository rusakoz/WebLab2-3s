package com.lab2.web.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.*;
//import jakarta.servlet.annotation.*;

@WebServlet(name = "AreaCheckServlet", value = "/checkArea")
public class AreaCheckServlet extends HttpServlet {

    public void init() {

    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        System.out.println("accept");
        PrintWriter out = response.getWriter();
        out.println("432423");

    }

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("accept2");
        String X = req.getParameter("X");
        String Y = req.getParameter("Y");
        req.getHeaderNames();
        System.err.println(X + " " + Y);
        //resp.setContentType("text/html");

        PrintWriter out = resp.getWriter();
        //out.println("<html><body>");
        out.println(X);
        //out.println("</body></html>");
    }

    public void destroy() {
    }
}