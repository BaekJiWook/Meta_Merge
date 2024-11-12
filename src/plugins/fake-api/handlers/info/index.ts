// Handlers for info
export const handlerInfo = [
  http.get<PathParams>('api/info/agent-info', async () => {
    return HttpResponse.json({ db.agentInfo }, { status: 200 })
  }),

  // serverRuntimeInfo 핸들러
  http.get<PathParams>('api/info/server-runtime-info', async () => {
    return HttpResponse.json({ db.serverRuntimeInfo }, { status: 200 })
  }),
]
