package com.lab2.web.servlet.requestManager;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public interface Request {

    void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException;

}
