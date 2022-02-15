export class Records {
    name?: string
    task_id?: string
    source?: string
}

export class SolutionPayload {
    username?: string
    scripe?: string
    language?: string
    versionIndex?: string
}

export class TasksResponse {
    id?: number
    task?: string
    name?: string
    inputParam?: string
    outputParam?: string
}

export class TaskResult {
    inputParam?: string
    expectedResult?: string
    userResult?: string
    name?: string
}

export class Top3 {
    id?: number
    username?: string
    taskResult?: string [
        
    ]
}