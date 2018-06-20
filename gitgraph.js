Object.prototype.add_branch = function(branchName){
  branch = this.branch(branchName);
  window[`${branch}`] = branch;
  return branch;
}

Object.prototype.add_branch_commit = function(branchName, message){
  branch = this.branch(branchName);
  branch.commit({message, author: "xnanodax"})
  window[`${branch}`] = branch;
  return branch;
}

Object.prototype.add_branch = function(branchName){
  branch = this.branch(branchName);
  window[`${branch}`] = branch;
  return branch;
}

Object.prototype.add_commit = function(message){
  commit = this.commit({message, author: "xnanodax"});
  return commit;
}

const gitgraph = new GitGraph({
  template: "metro", // or blackarrow
  orientation: "vertical",
  author: "xnanodax",
  mode: "extended" // or compact if you don't want the messages
});

const master = gitgraph.add_branch("master");

gitgraph.add_commit("Initial commit"); // 1 commit upon HEAD

const feature1 = master.add_branch("Add Board Class");
const feature2 = gitgraph.add_branch("Add Human Player Class"); // New branch from feature1

feature1.add_commit("Create Board#initialize");
feature1.add_commit("Create Board#render");

master.add_commit("Create Card Class");
feature2.add_commit("New cool feature");

// feature1.merge(master);
// feature2.merge(master);
