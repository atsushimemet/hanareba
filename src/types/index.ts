export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: string
  userId: string
  name: string
  scheduledDate?: Date
  budget?: number
  memo?: string
  createdAt: Date
  updatedAt: Date
  user?: User
  issues?: Issue[]
  tasks?: Task[]
}

export interface Issue {
  id: string
  eventId: string
  name: string
  description?: string
  priority: 'HIGH' | 'MEDIUM' | 'LOW'
  status: 'PENDING' | 'AGREED'
  createdAt: Date
  updatedAt: Date
  event?: Event
  options?: Option[]
}

export interface Option {
  id: string
  issueId: string
  name: string
  description?: string
  isSelected: boolean
  createdAt: Date
  updatedAt: Date
  issue?: Issue
  agreements?: Agreement[]
}

export interface Task {
  id: string
  eventId: string
  name: string
  assignee: string
  dueDate?: Date
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'
  createdAt: Date
  updatedAt: Date
  event?: Event
}

export interface Agreement {
  id: string
  optionId: string
  agreedAt: Date
  memo?: string
  createdAt: Date
  option?: Option
}

export type Priority = 'HIGH' | 'MEDIUM' | 'LOW'
export type Status = 'PENDING' | 'AGREED'
export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' 
