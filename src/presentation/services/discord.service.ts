import { envs } from "../../config";

export class DiscordService {

    private readonly discordWebookUrl = envs.DISCORD_WEBHOOK_URL;

    async notify(message: string) {
        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm44dmczN210aDBuc2JhMTgxZ2g4MXgwdDY5ZGt6ZjZodTJmbjJ0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif' }
                }
            ]
        }

        const response = await fetch(this.discordWebookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            console.log('Failed to send Discord notification');
            return false;
        }

        return true;
    }
}