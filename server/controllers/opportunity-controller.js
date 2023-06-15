const opportunities = require("../mocks/opportunities");

class OpportunityController {
  async getOpportunities(req, res, next) {
    try {
      const search = req.query.search || "";
      console.log(req.query);
      const filtered = opportunities.filter((item) => {
        console.log(item.title);
        console.log(search);
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
        );
      });
      return res.json(filtered);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new OpportunityController();
