const CONFIG = {
  OWNER: "pokaznoy",
  REPO: "medoid-economy",
  BRANCH: "main",
  FILE_PATH: "data.js"
};

function updateMedoidsToGitHub() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();

  const rows = values.slice(1);
  const medoids = [];

  rows.forEach(row => {
    const business_name = clean(row[1]); // B
    const owner = clean(row[2]);         // C
    const category = clean(row[3]);      // D
    const description = clean(row[4]);   // E
    const link = clean(row[5]);          // F

    if (!business_name || !category) return;

    medoids.push({
      business_name,
      owner,
      category,
      description,
      link
    });
  });

  const content = `const medoids = ${JSON.stringify(medoids, null, 2)};\n`;

  pushToGitHub(content);
}

function clean(value) {
  if (value === null || value === undefined) return "";
  return value.toString().trim();
}

function pushToGitHub(content) {
  const token = PropertiesService
    .getScriptProperties()
    .getProperty("GITHUB_TOKEN");

  if (!token) {
    throw new Error("Не знайдено GITHUB_TOKEN у Script Properties");
  }

  const url = `https://api.github.com/repos/${CONFIG.OWNER}/${CONFIG.REPO}/contents/${CONFIG.FILE_PATH}`;

  const getResponse = UrlFetchApp.fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/vnd.github+json"
    }
  });

  const fileData = JSON.parse(getResponse.getContentText());

  const bytes = Utilities
    .newBlob(content, "application/javascript", "data.js")
    .getBytes();

  const payload = {
    message: "Auto update data.js from Google Sheets",
    content: Utilities.base64Encode(bytes),
    branch: CONFIG.BRANCH,
    sha: fileData.sha
  };

  UrlFetchApp.fetch(url, {
    method: "put",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/vnd.github+json"
    },
    payload: JSON.stringify(payload)
  });
}

function onFormSubmit(e) {
  updateMedoidsToGitHub();
}
