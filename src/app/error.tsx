/* このファイルは、特定のページやコンポーネントで予期せぬエラーが発生した際に、そのエラーをキャッチする役割をもつ
エラーをキャッチすると、その部分の表示をerror.tsxで定義したUIに置き換える
これにより、サイト全体が真っ白になったり、壊れた表示になったりするのを防ぐ
影響範囲：error.tsxは、同じ階層にあるpage.tsxや、それ以下の階層のコンポーネントのエラーを補足する */

'use client' // エラーバウンダリはクライアントコンポーネントである必要があります
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをエラー報告サービスに記録する
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // セグメントを再レンダリングして回復を試みる
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}