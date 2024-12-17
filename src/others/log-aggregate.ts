/**
 * Problem: Log Aggregator
 * You are given logs from multiple microservices in the format:
 * <timestamp> <service-name> <log-level> <message>
 * Write a program to aggregate logs and perform the following operations:
 * 1. Filter logs by a specific service name.
 * 2. Group logs by log levels (INFO, ERROR, DEBUG, etc.).
 *      Sort logs by timestamp.
 *      Output logs in JSON format.

 * Expected Features
 * A clean API (functions) that can:
 * Filter logs by service-name.
 * Group logs by log-level.
 * Return logs in sorted order.
 * Generate output in JSON format.
 *
 *
 * Input :
 * 2024-12-11T09:00:00 ServiceA INFO Starting the service
 * 2024-12-11T09:01:00 ServiceB ERROR Failed to connect to DB
 * 2024-12-11T09:01:30 ServiceA DEBUG Debugging the connection
 * 2024-12-11T09:02:00 ServiceB INFO Service started successfully
 */
interface LogData {
    timestamp: string,
    service: string,
    level: string,
    message: string
}

function buildAndSortLogs(logs: string[]): LogData[] {
    const data: LogData[] = logs.map((entry) => {
        const [timestamp, service, level, ...message] = entry.split(' ');
        return {
            timestamp,
            service,
            level,
            message: message.join(' ')
        }
    });
    return data.sort((a, b) => {
        return new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf();
    });
}

function filterLogByServiceName(logs: string[], service: string) {
    const data = buildAndSortLogs(logs);
    return data.filter((entry) => {
        return entry.service === service
    });
}

function groupByLogLevels(logs: string[]) {
    const data = buildAndSortLogs(logs);
    return data.reduce((map: { [key: string]: LogData }, entry) => {
        if (!map[entry.level]) {
            map[entry.level] = entry;
        }
        return map;
    }, {});
}

const logs = [
    '2024-12-11T09:00:00 ServiceA INFO Starting the service',
    '2024-12-11T09:01:00 ServiceB ERROR Failed to connect to DB',
    '2024-12-11T09:01:30 ServiceA DEBUG Debugging the connection',
    '2024-12-11T09:02:00 ServiceB INFO Service started successfully',
];

console.log(filterLogByServiceName(logs, 'ServiceA'));
console.log(groupByLogLevels(logs));