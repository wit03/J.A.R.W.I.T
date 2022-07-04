import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import {
  addTransaction
  // deleteTransaction,
  // getTransaction,
  // getTransactions,
  // updateTransaction,
} from "./controller.ts";

const router = new Router();
router.post("/line-webhook", addTransaction)

// router.get("/transactions", getTransactions)
//   .get("/transactions/:id", getTransaction)
//   .post("/transactions", addTransaction)
//   .put("/transactions", updateTransaction)
//   .delete("/transactions", deleteTransaction);

export default router;
