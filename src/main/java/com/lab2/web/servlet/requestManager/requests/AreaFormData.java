package com.lab2.web.servlet.requestManager.requests;

import com.lab2.web.servlet.requestManager.Request;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AreaFormData implements Request {
    @Override
    public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("X") != null && request.getParameter("Y") != null && request.getParameter("R") != null) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("checkArea");
            dispatcher.forward(request, response);
        }else {
            // Надо выдать ошибку по response через setHeader
            System.err.println("err");
        }
    }
}
