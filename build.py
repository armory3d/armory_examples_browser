import sys, os
import bpy, arm

#bpy.ops.arm.clean_project()
wrd = bpy.data.worlds['Arm']
if(len(wrd.arm_exporterlist)==0):
    wrd.arm_exporterlist.add()
    wrd.arm_exporterlist_index = len(wrd.arm_exporterlist) - 1
    wrd.arm_exporterlist[-1].name = 'Preset'
    wrd.arm_exporterlist[-1].arm_project_target = 'html5'
    wrd.arm_exporterlist[-1].arm_project_scene = bpy.context.scene
# else:
#     for e in wrd.arm_exporterlist:
#         print(e)
# print(len(wrd.arm_exporterlist))
# print(wrd.arm_exporterlist[0])
#bpy.data.worlds['Arm'].arm_recompile = True
#assets.invalidate_compiled_data(self, context)
bpy.ops.arm.publish_project()
exit
