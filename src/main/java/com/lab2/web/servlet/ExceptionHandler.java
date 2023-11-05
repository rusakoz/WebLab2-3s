package com.lab2.web.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/ExceptionHandler")
public class ExceptionHandler extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Analyze the servlet exception
        Throwable throwable = (Throwable)request.getAttribute(
                "javax.servlet.error.exception");
        Integer statusCode = (Integer)request.getAttribute(
                "javax.servlet.error.status_code");
        String servletName = (String)request.getAttribute(
                "javax.servlet.error.servlet_name");
        String message = (String)request.getAttribute(
                "javax.servlet.error.message");

        if (servletName == null) {
            servletName = "Не известно";
        }
        String requestUri = (String)request.getAttribute(
                "javax.servlet.error.request_uri");

        if (requestUri == null) {
            requestUri = "Не известно";
        }

        // Set response content type
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        String title = "Информация об ошибках";
        String docType = "<!DOCTYPE html>";

        out.println(docType + "<html>\n"
                + "<head><title>" + title
                + "</title></head>\n"
                + "<body bgcolor = \"#f0f0f0\">\n");

        if (throwable == null && statusCode == null) {
            out.println(
                    "<h1>Информация об ошибке не найдена</h1>");
        }
        else if (statusCode != null && throwable == null) {
            out.println("Код ошибки : "
                    + statusCode + "<br>");
            out.println("Информация об ошибке: "
                    + message);
        }
        else {
            out.println("<h2>Информация об ошибке</h2>");
            out.println("Название сервлета : " + servletName
                    + "</br></br>");
            out.println("Название ошибки : "
                    + throwable.getClass().getName()
                    + "</br></br>");
            out.println("URI запроса: " + requestUri
                    + "<br><br>");
            out.println("Информация об ошибке: "
                    + throwable.getMessage());
        }
        out.println("<br>" + "Вернуться на стартовую страницу <a href=\"/WebLab2/index.jsp\""
                + "\">Тык</a>.");
        out.println("</body>");
        out.println("</html>");
    }
}
