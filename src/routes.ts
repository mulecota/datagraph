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
        const customersArray = customers.filter(customer => customer.customerId);
        return res.status(200).send(customersArray);
    });

    // Get a customer using customerId
    app.get("/api/banking/customers/:customerId", (req: Request, res: Response) => {
        const customerId = req.params.customerId;
        const response = customers.find(customer => customer.customerId == customerId);
        return res.status(200).send(response);
    });

    // Get all accounts of a customer using customerId
    app.get(
        "/api/banking/customers/:customerId/accounts",
        (req: Request, res: Response) => {
            const customerId = req.params.customerId;
            const customerAccounts = accounts.filter(account => account.customerId == customerId);
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
        const accountsArray = accounts.filter(account => account.customerId);
        return res.status(200).send(accountsArray);
    });


    // List a specific account using the accountId
    app.get("/api/banking/accounts/:accountid", (req: Request, res: Response) => {
        const accountid = req.params.accountid;
        const response = accounts.find(account => account.accountId == accountid);
        return res.status(200).send(response);
        // const account = accounts.filter(item => item.accountId === accountid);
        // return res.status(200).send(account);
    });

    // Add new account (in memory)

    app.post('/api/banking/accounts',
        (req: Request, res: Response) => {
            accounts.push(req.body);
            res.status(201).send({
                accounts,
            });
        });

    // eCommerce endpoints - TO-DO

}
