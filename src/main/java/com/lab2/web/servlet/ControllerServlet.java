package com.lab2.web.servlet;


import org.apache.taglibs.standard.tag.el.core.IfTag;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {

    public boolean validationData(HttpServletRequest request){
        return request.getParameter("X") != null && request.getParameter("Y") != null && request.getParameter("R") != null;
    }

    @Override
    public void init() throws ServletException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        System.out.println(request.getServletPath());;
        if (validationData(request)) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("checkArea");
            dispatcher.forward(request, response);
        }else {
            session.setAttribute("error_msg",  "Ошибка в отправленных данных");
            response.sendRedirect("index.jsp");
        }
    }
}
