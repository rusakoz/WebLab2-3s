<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Вторая лаба по Вебу</title>
<%--  <style><%@include file="/assets/main.css"%></style>--%>
  <LINK REL="StyleSheet" HREF="assets/main.css" TYPE="text/css">
  <script src="scripts/draw.js" defer></script>
  <script src="scripts/script.js" defer></script>
</head>


<table>

  <%@ include file="FooterHeader/header.jsp"%>

  <tbody id="main">

  <tr>

    <td class="main-td1"></td>
    <td colspan="2">

      <canvas id="canvas" height="325" width="325"></canvas>

    </td>

    <td class="main-td1"></td>
    <td class="main-td1"></td>

    <td colspan="4">
      <table class="result-table">
        <thead>
        <tr>
          <td>X</td>
          <td>Y</td>
          <td>R</td>
          <td>RESULT</td>
          <td>Current time</td>
          <td>Computation time</td>
        </tr>
        </thead>
        <tbody id="table-out">

        </tbody>
      </table>
    </td>



    <td class="main-td1"></td>
  </tr>


  <tr class="xyz">

    <td class="main-td1"></td>

    <td class="main-td1" colspan="3" rowspan="2">
      <form id="form2">

        <label> выберите R
          <select id="radiusR" name="radiusR">
            <option name="R1" value="1">1
            <option name="R1" value="2">2
            <option name="R1" value="3">3
            <option name="R1" value="4">4
            <option name="R1" value="5">5
          </select>
        </label>
        <br>
        <br>
        <label>
          <input id="coordX" name="coordX" placeholder="введите координату X">
        </label>
        <br>
        <br>
        Выберите координату Y
        <br>
        <input class="radio-coords" type="radio" name="coordY" value="-2" checked>-2
        <input class="radio-coords" type="radio" name="coordY" value="-1.5">-1.5
        <input class="radio-coords" type="radio" name="coordY" value="-1">-1
        <input class="radio-coords" type="radio" name="coordY" value="-0.5">-0.5
        <input class="radio-coords" type="radio" name="coordY" value="0">0
        <input class="radio-coords" type="radio" name="coordY" value="0.5">0.5
        <input class="radio-coords" type="radio" name="coordY" value="1">1
        <input class="radio-coords" type="radio" name="coordY" value="1.5">1.5
        <input class="radio-coords" type="radio" name="coordY" value="2">2

      </form>
    </td>

    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
  </tr>

  <tr class="xyz">

    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
  </tr>


  <tr class="xyz">

    <td class="main-td1"></td>


    <td class="main-td1" colspan="3">

      <button id="button-coords" name="button-send" type="submit" form="form2">Отправить</button>

    </td>

    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
  </tr>

  </tbody>

  <%@ include file="FooterHeader/footer.jsp"%>

<%--  <script type="text/javascript" charset="UTF-8"><%@include file="/scripts/draw.js"%></script>--%>
<%--  <script type="text/javascript" charset="UTF-8"><%@include file="/scripts/script.js"%></script>--%>

</table>