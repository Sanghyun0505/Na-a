# Na-a - 아이케어
해커그라운드 해커톤에 참여하는 Na-a 팀의 아이케어입니다.

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법
### 사전 준비 사항

- GitHub Account
- GitHub CLI
- Azure CLI
- Azure Account
- Azure Resource Group

### 인프라 배포하기

1. 이 리포지토리를 포크하고 다음 명령어로 클론합니다.
```bash
git clone https://github.com/{{내 깃헙 아이디}}/Na-a.git
cd Get-It
```
1. 다음과 같이 인프라를 배포합니다
```bash
az login
az deployment group create --resource-group "{{내 리소스 그룹}}" --template-file ./infra/main.bicep --parameters name={{원하는 서비스 아이디}}
```
3. 다음과 같이 github workflow 시크릿을 설정합니다. (윈도우 기준)
```bash
az webapp deployment list-publishing-profiles --name "{{원하는 서비스 아이디}}-app-heckers" --resource-group "{{내 리소스 그룹}}" --xml > publish_profile.xml

gh auth login
gh secret set AZURE_APP_NAME --repo {{내 깃헙 아이디}}/Na-a --body "{{원하는 서비스 아이디}}"
cat publish_profile.xml | gh secret set AZUREAPPSERVICE_PUBLISHPROFILE --repo {{내 깃헙 아이디}}/Na-a
```
4. 포크한 리포지토리의 Github Actions를 활성화 해줍니다.
```
https://github.com/{{자신의 Github ID}}/Na-a/actions
에 접속해 초록색 Enable 버튼 클릭
```
5. 다음과 같이 github actions workflow를 실행합니다. (윈도우 기준)
```bash
gh workflow run "Deploy Azure" --repo {{내 깃헙 아이디}}/Na-a
```
6. 배포가 완료될때까지 기다립니다. (15분 가량 소요됩니다.)
7. 다음과 같이 배포를 확인합니다.
```bash
curl https://{{원하는 서비스 아이디}}-app-hackers.azurewebsites.net
```
