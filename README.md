# Downtime Telegram Bot

Indicate your users of downtime in Telegram!

<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flosparviero%2Fdowni%2Ftree%2Fvercel&env=BOT_TOKEN&project-name=downbot&repository-name=downbot)

<details>

<summary>
Deploy instructions.
</summary>

<br>

Note after deploying you have to set webhook.

Use the following webhook url:

```url
https://downbot-<your-vercel-username>.vercel.app/api/bot
```

Or just use [@hooktelebot](https://hooktelebot.t.me).

</details>

<br>

### Brief Note

Whenever you start work or maintenance on your bot just call ```npx downbot``` to notify your users in the meanwhile.

If you use a .env file just call downbot in the same directory as your bot and it'll use that. No need to even set env vars.

The bot replies to all commands & messages.

<br>

### Usage

If installed:

```shell
downbot
```
For temporary use:

```shell
npx downbot
```
_Note:_ You'll have to keep the terminal running for the duration.

<br>

<details>

<summary>
Make sure env vars are set in your working directory.
</summary>

<br>

On Mac / Linux

```bash
touch .env && { echo "BOT_TOKEN="; } >> .env && nano .env
```

On Windows

```cmd
type nul > .env && echo BOT_TOKEN= >> .env && notepad .env
```

</details>

<br>


### Install

```shell
npm i -g downbot
```

### Uninstall

```shell
npm uninstall downbot
```

<br>

### License

AGPL 3.0 ©️ Zubin
