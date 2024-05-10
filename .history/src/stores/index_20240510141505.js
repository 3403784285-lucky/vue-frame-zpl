// 拿到modules下的所有文件
const modulesFiles = import.meta.globEager('./modules/*.*')import.meta.glob('../views/**/router/*.js', { eager: true })
const modules = {}
for (const key in modulesFiles) {
  const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
  const value = modulesFiles[key]
  modules[moduleName] = value
  // console.log(modules);
}

export default modules
