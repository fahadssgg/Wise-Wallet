// import React from "react";
import Card from "../Components/Card";
import SidePar from "../Components/SidePar";
// import AddBudget from "../Components/contexts/AddBudget";
import {
  useBudgets,
  // UNCATEGORIZED_BUDGET_ID,
} from "../Components/contexts/BudgetCont";
// import AddExpense from "../Components/contexts/AddExpense";
// import UncategorizedBudgetCard from "../Components/UncategorizedBudgetCard";
// import ViewExpense from "../Components/contexts/ViewExpense";
import TotalCard from "../Components/TotalCard";
import Chart from "../Components/Chart";

export default function InfoPage() {
  // const [Btn, setBtn] = React.useState(false);
  // const [showAddExpenseModal, setShowAddExpenseModal] = React.useState(false);
  // const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] =
  //   React.useState();
  // const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] =
  //   React.useState();
  const { budgets, getBudgetExpenses }: any = useBudgets();
  // const UncategorizedId: any = UNCATEGORIZED_BUDGET_ID;
  // function openAddExpenseModal(budgetId: any) {
  //   setShowAddExpenseModal(true);
  //   setAddExpenseModalBudgetId(budgetId);
  // }
  return (
    <>
      <div className="h-[55rem] flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover">
        <div className="h-[50rem] w-[90rem] bg-[#d9d9d9] bg-opacity-30 rounded-3xl ">
          {" "}
          <div className=" grid grid-cols-5  h-screen">
            <div className="  h-screen ">
              <SidePar />
            </div>
            <div className=" h-screen col-start-2 col-end-6 ml-4 mb-40">
              <div className="flex">
                <h1 className="me-auto text-5xl my-10 ml-10">Overview</h1>
              </div>

              <div className="flex flex-row justify-evenly w-[70rem]  ">
                <div className=" w-[35rem] ">
                  <TotalCard />

                  <div className="h-[23rem] w-[32rem] mt-8 overflow-auto">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill,minmax(300px,1fr))",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      {budgets.map((budget: any) => {
                        const money = getBudgetExpenses(budget.id).reduce(
                          (total: number, expense: any) =>
                            total + expense.amount,
                          0
                        );
                        return (
                          <div className="ml-16 w-[26rem]">
                            <Card
                              key={budget.id}
                              bg=""
                              name={budget.name}
                              money={money}
                              max_money={budget.max}
                              AddExOnCard={""}
                              ViewExpense={""}
                              hideBtn="True"
                            />{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className=" w-[35rem]">
                  <div className="mt-4 mx-10 py-9 bg-white rounded-3xl px-10 flex justify-evenly items-center gap-5">
                    <div className="flex hover:scale-110 flex-col justify-center text-center gap-5">
                      <p className=" text-gray-500 text-lg">Your Salary</p>
                      <p className=" text-xl font-semibold">
                        {localStorage.getItem("salary")}
                      </p>
                    </div>

                    <div className="flex flex-col hover:scale-110 justify-center text-center gap-5">
                      <p className=" text-gray-500 text-lg">
                        Your Saving Amount
                      </p>
                      <p className=" text-xl font-semibold">
                        {localStorage.getItem("saving")}
                      </p>
                    </div>

                    <div className="flex flex-col hover:scale-110 justify-center text-center gap-5">
                      <p className=" text-gray-500 text-lg">Rest of Salary</p>
                      <p className=" text-xl font-semibold">
                        {localStorage.getItem("rest")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 mx-16  bg-white rounded-3xl text-center">
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AddBudget show={Btn} handleClose={() => setBtn(false)} />
      <AddExpense
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpense
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId(undefined)}
      /> */}
    </>
  );
}
