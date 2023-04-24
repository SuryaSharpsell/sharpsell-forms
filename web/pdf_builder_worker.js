
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"
);

addEventListener("message", (event) => {
  console.log("Preparing PDF" +event.data["is_open_only"]);
  // parse data to create array of Uint8List images
  const bytesArrayString = event.data["bytes_string"];
  const pdfHeight = event.data["pdfHeight"];
  const pdfWidth = event.data["pdfWidth"];
  const isOpenOnly = event.data["is_open_only"];
  const bytesStringArray = JSON.parse(bytesArrayString);

  // create pdf out of images
  let orientation = "l";

  if(pdfHeight>pdfWidth)
  {
    orientation = "p";
  }
  const doc = new jspdf.jsPDF(orientation, "px", [pdfHeight,pdfWidth], true,false,16,1.0,["px_scaling"]);
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  bytesStringArray.forEach((e, i) => {
    const img = btoa(e); //String to b64 encoded
    doc.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "NONE");
    if (i != bytesStringArray.length - 1) {
      doc.addPage([pdfHeight,pdfWidth], orientation);
    }
  });
  

  // export pdf back to the main thread
  const fileBlob = doc.output("blob");
  console.log(fileBlob);
  console.log(event.data);
  if (event.data["export_type"] === "binary") {
    console.log('dispatching the binary');
    fileBlob.arrayBuffer().then((fileBinary) =>
      self.postMessage({ name: event.data["name"], blob: fileBinary, export_type: 'binary', insured_name: event.data["insured_name"], isOpenOnly: isOpenOnly, })
    );
  } else {
    console.log("dispatching the pdf");
    self.postMessage({ name: event.data["name"], blob: fileBlob, export_type: 'blob', isOpenOnly: isOpenOnly, });
  }

});