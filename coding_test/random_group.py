# 1. 랜덤 조합
import random
import math

def mix_members(members):
    groups = {}
    group_cnt = math.ceil(len(members) / 7)
    
    random.shuffle(members) # 멤버 무작위로 섞기
    
    for i in range(0, group_cnt): # 7명씩 조편성 및 남은 인원 한개 조 구성
        groups['{}조'.format(i + 1)] = members[i * 7:(i + 1) * 7] 

    group_idx = group_cnt - 1
    
    # 마지막 조에 부족한 인원을 다른 조들을 순환하면서 1명씩 보충
    while len(groups['{}조'.format(group_cnt)]) < 5:
        group_idx = group_idx or group_cnt - 1  

        member_to_move = groups['{}조'.format(group_idx)].pop(-1)
        groups['{}조'.format(group_cnt)].append(member_to_move)
        
        group_idx -= 1
        
    return groups

members = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'a', 'b', 'c', 'd', 'e', 'f', 'g']

print(mix_members(members))
