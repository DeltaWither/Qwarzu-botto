class MemberGroup {
    constructor(name, description) {
        this.name = name
        this.description = description
    }
    
    everyone = false
    disallowedPerms = []
    allowedPerms = []
    disallowedRoles = []
    allowedRoles = []
    disallowedMembers = []
    allowedMembers = []
    
    /*
     * Input a guildMember and returns boolean meaning whether the member passes the checks
     * The lower ones override the higher ones
     * everyone includes everyone
     * disallowedPerms gives false if the member has one of the discord permissions
     * allowedPerms gives true if the member has one of the discord permissions (admin and owner count for all perms)
     * disallowedRoles gives false if the member has one of the roles
     * allowedRoles gives true if the member has one of the roles
     * disallowedMembers gives false for specifically those members
     * allowedMembers gives true for specifically those members
     */
    async checkMember(member) {
        let memberInGroup = this.everyone
        
        let check
        for (perm of disallowedPerms) {
            check = await member.permissions.has(perm, false)
            if (check) {
                memberInGroup = false
            }
        }
        
        for (perm of allowedPerms) {
            check = await member.permissions.has(perm, true)
            if (check) {
                memberInGroup = true
            }
        }
        
        check = await member.roles.cache.hasAny(disallowedRoles)
        if (check) {
            memberInGroup = false
        }
        
        check = await member.roles.cache.hasAny(allowedRoles)
        if (check) {
            memberInGroup = true
        }
        
        for (memberId of disallowedMembers) {
            check = await member.id === member
            if (check) {
                memberInGroup = false
            }
        }
        
        for (memberId of disallowedMembers) {
            check = await member.id === member
            if (check) {
                memberInGroup = true
            }
        }
    }
}

module.exports = {MemberGroup}
