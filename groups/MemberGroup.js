class MemberGroup {
    constructor(name, description) {
        this.name = name
        this.description = description
        this.everyone = false
        this.disallowedPerms = []
        this.allowedPerms = []
        this.disallowedRoles = []
        this.allowedRoles = []
        this.disallowedMembers = []
        this.allowedMembers = []
    }
    
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
        for (const perm of this.disallowedPerms) {
            check = await member.permissions.has(perm, false)
            if (check) {
                memberInGroup = false
            }
        }
        
        for (const perm of this.allowedPerms) {
            check = await member.permissions.has(perm, true)
            if (check) {
                memberInGroup = true
            }
        }
        
        check = await member.roles.cache.hasAny(this.disallowedRoles)
        if (check) {
            memberInGroup = false
        }
        
        check = await member.roles.cache.hasAny(this.allowedRoles)
        if (check) {
            memberInGroup = true
        }
        
        for (const memberId of this.disallowedMembers) {
            check = await member.id === member
            if (check) {
                memberInGroup = false
            }
        }
        
        for (const memberId of this.disallowedMembers) {
            check = await member.id === member
            if (check) {
                memberInGroup = true
            }
        }
        
        return memberInGroup
    }
}

module.exports = {MemberGroup}
