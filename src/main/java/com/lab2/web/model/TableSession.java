package com.lab2.web.model;

import java.time.LocalDateTime;

public record TableSession(String X, String Y, String R, String result, long computeTime, LocalDateTime date) {
}
