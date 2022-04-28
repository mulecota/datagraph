// src/routes.ts

import { Express, request, Request, Response } from "express";
import customers from "./data/banking/customers";
import accounts from "./data/banking/accounts";

export default function (app: Express) {
    // Healthcheck endpoint
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.send({
            status: "OK",
            uptime: process.uptime(),
            mockdata: [
                {
                    customers,
                    accounts,
                },
            ],
        });
    });

    // Banking endpoints

    // Customers

    // List all the customers
    app.get("/api/banking/customers", (req: Request, res: Response) => {
        res.status(200).send({
            customers: customers,
        });
    });

    // Get a customer using customerid
    app.get("/api/banking/customers/:customerid", (req: Request, res: Response) => {
        const customerid = req.params.customerid;
        customers.map((customers) => {
            if (customers.customerid == customerid) {
                return res.status(200).send({
                    customers,
                });
            }
        });
    });

    // Get all accounts of a customer using customerid
    app.get(
        "/api/banking/customers/:customerid/accounts",
        (req: Request, res: Response) => {
            const customerid = req.params.customerid;

            const customerAccounts = accounts.filter(account => account.customerid == customerid);

            // let customerAccounts = [];
            // accounts.map((account) => {
            //     if (account.customerid == customerid) {
            //         console.log(account);
            //         customerAccounts.push(account);
            //     }
            //     return res.status(200).send(customerAccounts);
            //
            // });
            return res.status(200).send(customerAccounts);

        }
    );

    // Add new customers (in memory)

    app.post('/api/banking/customers',
        (req, res) => {
            customers.push(req.body);
            res.status(201).send({
                customers,
            });
        });

    // Accounts

    // List all the accounts
    app.get("/api/banking/accounts", (req: Request, res: Response) => {
        res.status(200).send({
            accounts: accounts,
        });
    });


    // List a specific account using the accountId
    app.get("/api/banking/accounts/:accountid", (req: Request, res: Response) => {
        const accountid = req.params.accountid;
        const account = accounts.filter(item => item.id === accountid);
        // accounts.map((accounts) => {
        //     if (accounts.id == accountid) {
        //         return res.status(200).send({
        //             accounts,
        //         });
        //     }
        // });
        return res.status(200).send(account);
    });

    // Add new account (in memory)

    app.post('/api/banking/accounts',
        (req: Request, res: Response) => {
            accounts.push(req.body);
            res.status(201).send({
                accounts,
            });
        });

    // eCommerce endpoints

}
