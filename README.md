# Downtime Telegram Bot

Indicate your users of downtime in Telegram!

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
