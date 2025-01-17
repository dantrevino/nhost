import { proxyWithComputed } from 'valtio/utils'

export type AppState = {
  /**
   * Identifiers and types of available types. Used to easily query the type of a given identifier.
   *
   * @default new Map()
   */
  contentReferences: Map<number, string>
  /**
   * Generated documentation path relative to Docusaurus root.
   */
  docsRoot: string
  /**
   * `true` if the app is in verbose mode, `false` otherwise.
   *
   * @default false
   */
  verbose?: boolean
  /**
   * Name of Docusaurus sidebar configuration.
   */
  sidebarConfig?: string
  /**
   * Base slug to use for generating documentation links.
   */
  baseSlug?: string
}

export type ComputedAppState = {
  /**
   * Generated documentation path relative to Docusaurus root. Leading and trailing slashes are
   * removed.
   */
  formattedDocsRoot: string
}

export const appState = proxyWithComputed<AppState, ComputedAppState>(
  {
    verbose: false,
    contentReferences: new Map(),
    docsRoot: ''
  },
  {
    formattedDocsRoot: (snap) => snap.docsRoot.replace(/(^\/|\/$)/gi, '')
  }
)

export default appState
