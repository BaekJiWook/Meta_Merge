import type { AgentInfo, ServerRuntimeInfo } from '@db/info/types'

// DB 인터페이스 정의
interface DB {
  agentInfo: AgentInfo
  serverRuntimeInfo: ServerRuntimeInfo
}

// 데이터베이스 객체 정의
export const db: DB = {
  agentInfo: {
    installPath: 'C:\\sts_esb_workspace\\agent-console\\manager\\im\\bin',
    osInfo: 'Windows 11',
    memoryInfo: '최대 합: 3,666,432 KB, 현재 합: 33,730 KB, 커밋 합: 140,800 KB,',
    classPath: [
      'C:\\sts_esb_workspace\\agent-console\\target\\test-classes',
      'C:\\sts_esb_workspace\\agent-console\\libs\\AD\\adaptor-2.5.3.jar',
      'C:\\sts_esb_workspace\\agent-console\\libs\\CO\\backport-util-concurrent-3.1.jar',
      'C:\\sts_esb_workspace\\agent-console\\libs\\CO\\loglib-nodep-2.2.jar',
      'C:\\sts_esb_workspace\\agent-console\\libs\\CO\\commons-codec-1.4.jar',
      'C:\\sts_esb_workspace\\agent-console\\libs\\CO\\commons-collections-3.2.2.jar',
      'C:\\sts_esb_workspace\\agent-console\\libs\\CO\\commons-compress-1.10.jar',
      'C:\\sts_esb_workspace\\agent-console\\libs\\CO\\commons-configuration-1.6.jar',
    ],
    totalRunTime: '0일 0시간 14분 39초',
  },
  serverRuntimeInfo: {
    javaVersion: '1.8.0_351 (Oracle Corporation)',
    bootClassPath: [
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\lib\\resources.jar',
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\lib\\rt.jar',
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\lib\\jsse.jar',
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\lib\\jce.jar',
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\lib\\charsets.jar',
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\lib\\jfr.jar',
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\classes',
    ],
    libraryPath: [
      'C:\\Program Files\\Java\\jdk1.8.0_351\\jre\\bin',
      'C:\\WINDOWS\\System32',
      'C:\\WINDOWS',
      'C:\\sts-4.15.1.RELEASE\\plugins\\org.eclipse.justj.openjdk.hotspot.jre.full.win32.x86_64_17.0.3.v20220515-1416\\jre\\bin\\server',
      'C:\\sts-4.15.1.RELEASE\\plugins\\org.eclipse.justj.openjdk.hotspot.jre.full.win32.x86_64_17.0.3.v20220515-1416\\jre\\bin',
      'C:\\app\\oracle\\product\\12.2.0\\dbhome_1\\bin',
      'C:\\oracle\\virtual\\product\\12.2.0\\dbhome_1\\bin',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0',
    ],
  },
}
