/* JavaScript-file for Awareness Check websites*/
function saveClickData() {
  try {
    let payload = getPayload();
    if (payload === "" || payload === undefined || payload === null)
      throw new Exception();

    putData(
      "https://prod-76.westeurope.logic.azure.com/workflows/bea9e73195dd423193566047a20e45a7/triggers/manual/paths/invoke/" +
        payload +
        "?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=COwPaGwgdHRF1LzBY1dPD00_V_9KlrRM8a6qxBng5is"
    );
  } catch (err) {
    console.log(err);
  }
}

function saveLoginData() {
  try {
    let payload = getPayload();
    if (payload === "" || payload === undefined || payload === null)
      throw new Exception();

    let loginfmt = getLoginfmt();
    if (loginfmt === "" || loginfmt === undefined || loginfmt === null)
      throw new Exception();

    putData(
      "https://prod-105.westeurope.logic.azure.com/workflows/1a00f8a163454ef59e81b4eb1478516b/triggers/manual/paths/invoke/" +
        payload +
        "/" +
        loginfmt +
        "?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=3db4D2rPu_9zJ5kMrfG03Y0Vc8gJqZnnWwvgNHIS88M"
    );
  } catch (err) {
    console.log(err);
  }
}

function getPayload() {
  try {
    let url = new URL(location.href);
    let payload = url.searchParams.get("payload");
    if (payload === "" || payload === undefined || payload === null)
      throw new Exception();
    return payload;
  } catch (err) {
    console.log(err);
  }
}

function getLoginfmt() {
  try {
    let url = new URL(location.href);
    let loginfmt = url.searchParams.get("loginfmt");
    if (loginfmt === "" || loginfmt === undefined || loginfmt === null)
      throw new Exception();
    return loginfmt;
  } catch (err) {
    console.log(err);
  }
}

function putData(url) {
  try {
    $.ajax({
      url: url,
      type: "PUT",
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        console.log(result);
      },
    });
  } catch (err) {
    console.log(err);
  }
}

function reload() {
  try {
    return new URL(location.href);
  } catch (err) {
    console.log(err);
  }
}

function next() {
  try {
    let url = location.href.toString();
    if (url.includes("loginfmt")) {
      url = url.substring(0, url.indexOf("&"));
    }
    return new URL(
      url.replace("index.html", "index2.html") +
        "&loginfmt=" +
        $("#loginEmail").val()
    );
  } catch (err) {
    console.log(err);
  }
}

function checkResult() {
  try {
    let url = location.href.toString();
    return new URL(url.replace("index2.html", "awareness_check.html"));
  } catch (err) {
    console.log(err);
  }
}

function back() {
  try {
    let url = location.href.toString();
    return new URL(url.replace("index2.html", "index.html"));
  } catch (err) {
    console.log(err);
  }
}
