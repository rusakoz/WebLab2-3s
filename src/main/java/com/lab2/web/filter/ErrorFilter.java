package com.lab2.web.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter("/*")
public class ErrorFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpSession session = ((HttpServletRequest) servletRequest).getSession();
        String err = (String) session.getAttribute("error_msg");
        System.out.println(((HttpServletRequest) servletRequest).getServletPath());
        if (err != null && !((HttpServletRequest) servletRequest).getServletPath().equals("/index.jsp")) {
            System.err.println(err);
            session.setAttribute("error_msg", null);
            System.err.println("s");
        }


        filterChain.doFilter(servletRequest, servletResponse);
    }
}
