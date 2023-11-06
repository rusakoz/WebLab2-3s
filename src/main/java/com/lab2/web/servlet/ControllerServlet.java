package com.lab2.web.servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {

    public boolean validationData(HttpServletRequest request){
        return request.getParameter("X") != null && request.getParameter("Y") != null && request.getParameter("R") != null;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        if (validationData(request)) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("checkArea");
            dispatcher.forward(request, response);
        }else {
            //response.sendRedirect("index.jsp");
            response.sendError(400, "Ошибка в отправленных данных");
        }
    }
}
