package com.lab2.web.servlet;

import com.lab2.web.servlet.requestManager.Request;
import com.lab2.web.servlet.requestManager.requests.AreaFormData;
import com.lab2.web.servlet.requestManager.requests.IndexJSP;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
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
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        super.service(req, res);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getServletPath();
        System.err.println(action);
        //delegateManager.get(action).execute(req, resp);
        PrintWriter out = resp.getWriter();
        if (req.getServletPath().equals("/scripts/draw.js")){
            System.err.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            //resp.sendRedirect("/scripts/draw.js");
        }
//        System.err.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
//        out.println("<script type='text/javascript' src=\"/scripts/draw.js\">");
//        out.println("</script>");
        //getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
