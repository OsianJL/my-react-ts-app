export interface Todo {
    id: number
    text: string
    completed: boolean
}

export enum Priority {
    Low = 'Baja',
    Medium = 'Media',
    High = 'Alta',
  }