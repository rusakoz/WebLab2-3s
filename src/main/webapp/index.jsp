<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Вторая лаба по Вебу</title>
  <link rel="StyleSheet" href="assets/main.css" type="text/css">


</head>

<body>
<table>

  <%@ include file="include/modal/alert.jsp" %>

  <%@ include file="include/footerHeader/header.jsp"%>

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
        <c:forEach items="${sessionScope.dataTable}" var="data">
          <tr>
            <td>
              <c:out value="${data.X()}"/>
            </td>
            <td>
              <c:out value="${data.Y()}"/>
            </td>
            <td>
              <c:out value="${data.R()}"/>
            </td>
            <td>
              <c:out value="${data.result()}"/>
            </td>
            <td>
              <c:out value="${data.date()}"/>
            </td>
            <td>
              <c:out value="${data.computeTime()}"/>
            </td>
          </tr>
        </c:forEach>
        </tbody>
      </table>
    </td>
    <td class="main-td1"></td>
  </tr>

  <tr class="xyz">

    <td class="main-td1"></td>

    <td class="main-td1" colspan="3" rowspan="2">
      <form id="form2">
        <br>
        <br>
        <label>Введите координату X от -5 до 5
          <br>
          <input id="coordX" name="coordX" placeholder="введите координату X">
        </label>
        <br>
        <br>
        <label>Введите координату Y от -3 до 5
          <br>
          <input id="coordY" name="coordY" placeholder="введите координату Y">
        </label>
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

      <button id="button1" class="button-coords" name="button-send" value="1" type="submit" form="form2">Радиус 1</button>
      <button id="button2" class="button-coords" name="button-send" value="1.5" type="submit" form="form2">Радиус 1.5</button>
      <button id="button3" class="button-coords" name="button-send" value="2" type="submit" form="form2">Радиус 2</button>
      <button id="button4" class="button-coords" name="button-send" value="2.5" type="submit" form="form2">Радиус 2.5</button>
      <button id="button5" class="button-coords" name="button-send" value="3" type="submit" form="form2">Радиус 3</button>

    </td>

    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
    <td class="main-td1"></td>
  </tr>

  </tbody>

  <%@ include file="include/footerHeader/footer.jsp"%>

</table>
</body>

<script src="scripts/draw.js"></script>
<script src="scripts/script.js"></script>
<script type="text/javascript">
  <c:out value="printPoint(${sessionScope.dataTable.get(sessionScope.dataTable.size() - 1).R()},
                           ${sessionScope.dataTable.get(sessionScope.dataTable.size() - 1).X()},
                           ${sessionScope.dataTable.get(sessionScope.dataTable.size() - 1).Y()})"/>

</script>

</html>