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

    // List all the customers
    app.get("/api/banking/customers", (req: Request, res: Response) => {
        res.status(200).send({
            customers: customers,
        });
    });

    // List all the accounts
    app.get("/api/banking/accounts", (req: Request, res: Response) => {
        res.status(200).send({
            accounts: accounts,
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
            accounts.map((accounts) => {
                if (accounts.customerid == customerid) {
                    return res.status(200).send({
                        accounts,
                    });
                }
            });
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

    // Add new account (in memory)

    app.post('/api/banking/accounts',
        (req, res) => {
            accounts.push(req.body);
            res.status(201).send({
                customers,
            });
        });

    // eCommerce endpoints

}
