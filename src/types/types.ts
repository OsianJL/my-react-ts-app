export interface Todo {
    id: number
    text: string
    completed: boolean
    priority: Priority
}

export enum Priority {
    Low = 'Baja',
    Medium = 'Media',
    High = 'Alta',
  }