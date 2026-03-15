// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1482425735506427964",
        serverId: "818948679204995092",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: false,
    },
];
