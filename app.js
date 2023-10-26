#!/usr/bin/env node
import { currencies, amount } from "./input.js";
import { currency, greeting } from "./function.js";
//--------------------------------------------
greeting();
currency(currencies.currency, amount.money);
