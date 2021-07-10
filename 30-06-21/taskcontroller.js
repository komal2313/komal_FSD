exports.generateTaskPDF = (req, res) => {
  let { userId } = req.params;
  userId = mongoose.Types.ObjectId(userId);
  Task.find({ userId })
    .then((tasks) => {
      if (tasks.length === 0) {
        console.error(`There were no tasks found for User with ID: ${userId}`);
        return res.status(404).send("No tasks found");
      }
      console.info(
        `Tasks for User with ID: ${userId} were successfully found.`
      );
      pdfService.createPDF("Dummy", tasks);

      fs.readFile("../output.pdf", (err, file) => {
        if (!err) {
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            "attachment; filename=quote.pdf"
          );
          return res.send(file);
        }
      });
    })
    .catch((error) => {
      console.error(
        `There was an error while fetching all tasks for userID: ${userId}`,
        error
      );
      return res.status(500).send("ERROR");
    });
};