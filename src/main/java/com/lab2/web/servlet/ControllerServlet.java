package com.lab2.web.servlet;

import com.lab2.web.servlet.requestManager.Request;
import com.lab2.web.servlet.requestManager.requests.AreaFormData;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@WebServlet(name = "ControllerServlet", value = "/")
public class ControllerServlet extends HttpServlet {
    Map<String, Request> delegateManager;
    @Override
    public void init() throws ServletException {
        delegateManager = new HashMap<>();
        delegateManager.put("/AreaFormData", new AreaFormData());

    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getServletPath();
        System.err.println(action);
        Request request = delegateManager.get(action);
        PrintWriter out = resp.getWriter();
        if (request != null){
            request.execute(req, resp);
        }else {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            out.write("Incorrect");
        }
        out.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
