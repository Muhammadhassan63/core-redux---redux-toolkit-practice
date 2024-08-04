import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance: 0,
    loan: 0,
    loanPupose: ""
}


const accountReducer = createSlice({
    name: "account",
    initialState,
    reducers: {
        deposit(state, action) {
            state.balance = state.balance + action.payload
        },

        withdraw(state, action) {
            if (state.balance < action.payload) return
            state.balance = state.balance - action.payload
        },

        requestLoan: {
            prepare(loan, loanPurpose) {
                return {
                    payload: { loan, loanPurpose },
                };
            },
            reducer(state, action) {
                state.loan = action.payload.loan;
                state.loanPupose = action.payload.loanPupose;
            }
        },

        payLoan(state) {
            state.loan = 0
        }
    }
})


export const {withdraw, deposit, payLoan, requestLoan} = accountReducer.actions
export default accountReducer.reducer;
