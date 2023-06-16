const opportunities = require("../mocks/opportunities");

class OpportunityController {
  async getOpportunities(req, res, next) {
    try {
      const search = req.query.search || "";
      const filtered = opportunities.filter((item) => {
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
