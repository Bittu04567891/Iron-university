const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")(
  "sk_test_51OYAmnSJY7qu9uFfZSNKDXOWSfZF2dMkpopf7l3TRBFyPdhUwNBGAf9bFp933byBMP2rotQIO04rgKeEyi0xlgoq00bFh9CuWT"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
