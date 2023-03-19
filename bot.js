#!/usr/bin/env node

/*!
 * Downi
 * Copyright (c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

// Add env vars as a preliminary

require("dotenv").config();
const { Bot } = require("grammy");

async function downi() {
  // Bot

  const bot = new Bot(process.env.BOT_TOKEN);

  // Plugins

  bot.use(log);
  bot.use(responseTime);

  // Response

  async function responseTime(ctx, next) {
    const before = Date.now();
    await next();
    const after = Date.now();
    console.log(`Response time: ${after - before} ms`);
  }

  // Log

  async function log(ctx, next) {
    const from = ctx.from;
    const name =
      from.last_name === undefined
        ? from.first_name
        : `${from.first_name} ${from.last_name}`;
    console.log(
      `From: ${name} (@${from.username}) ID: ${from.id}\nMessage: ${ctx.message.text}`
    );
    await next();
  }

  // Commands

  bot.command("", async (ctx) => {
    await ctx.reply(
      "*Bot is down till further notice.*\n_We apologise for the inconvenience caused._",
      { parse_mode: "Markdown" }
    );
  });

  // Messages

  bot.on("message", async (ctx) => {
    await ctx.reply(
      "*Bot is down till further notice.*\n_We apologise for the inconvenience caused._",
      { parse_mode: "Markdown" }
    );
  });

  // Error

  bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}`);
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e);
      if (e.description === "Forbidden: bot was blocked by the user") {
        console.log("Bot was blocked by the user");
      } else {
        ctx.reply("An error occurred");
      }
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else {
      console.error("Unknown error:", e);
    }
  });

  // Run

  bot.start();
}

module.exports = { downi };
