const opportunities = require("../mocks/opportunities");

class OpportunityController {
  async getOpportunities(req, res, next) {
    try {
      const { debouncedValue } = req.body;

      const filtered = opportunities.filter((item) => {
        return (
          item.title
            .toLocaleLowerCase()
            .includes(debouncedValue.toLocaleLowerCase()) ||
          item.description
            .toLocaleLowerCase()
            .includes(debouncedValue.toLocaleLowerCase())
        );
      });

      return res.json(filtered);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new OpportunityController();
