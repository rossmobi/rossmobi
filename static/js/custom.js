const currentState = logseq.api.get_state_from_store("document/mode?");
if (currentState != true ) {
  logseq.api.invoke_external_command("logseq.ui/toggle-document-mode");
}