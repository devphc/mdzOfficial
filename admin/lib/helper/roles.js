import _ from 'lodash'

export const hasPermission = (rule, roles) =>
  _.intersection(rule, roles).length > 0

// super => 超级管理员
// admin => 管理员
// leader => 主管领导
// reviewer => 审核人员
// staff => 会务人员
// finance => 财务人员
// section => 各级单位

export const VIEW_SECTION = ['super', 'admin', 'leader']
export const VIEW_ROLES = ['super']
export const VIEW_ROOM = ['super', 'admin', 'leader', 'section']
export const VIEW_REVIEW = ['super', 'admin', 'leader', 'reviewer']
export const VIEW_FEEDBACK = ['super', 'admin', 'leader', 'staff']
export const VIEW_ORDER = ['super', 'leader', 'section', 'finance']
export const VIEW_OWNER_ORDER = ['section']
export const VIEW_ALL_ORDER = ['super', 'leader', 'finance']

export const DO_REVIEW = ['reviewer']
export const DO_CREATE_TRANSACTION = ['section']
export const DO_CANCEL_TRANSACTION = ['section', 'finance']
export const DO_CONFIRM_TRANSACTION = ['finance']
export const DO_FEEDBACK = ['staff']
