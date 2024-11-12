export interface AgentInfo {
  installPath: string
  osInfo: string
  memoryInfo: string
  classPath: string[]
  totalRunTime: string
}
export interface ServerRuntimeInfo {
  javaVersion: string
  bootClassPath: string[]
  libraryPath: string[]
}
